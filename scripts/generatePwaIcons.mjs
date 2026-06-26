import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const ICONS = [
  ['public/icons/bmquest-icon-192.png', 192, false],
  ['public/icons/bmquest-icon-512.png', 512, false],
  ['public/icons/bmquest-maskable-192.png', 192, true],
  ['public/icons/bmquest-maskable-512.png', 512, true],
]

for (const [filePath, size, maskable] of ICONS) {
  const absolutePath = resolve(filePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, createIcon(size, maskable))
}

function createIcon(size, maskable) {
  const pixels = Buffer.alloc(size * size * 4)
  const center = size / 2
  const radius = maskable ? size * 0.5 : size * 0.43
  const cornerRadius = maskable ? size * 0.2 : size * 0.24

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4
      const gradient = (x + y) / (size * 2)
      const background = mixColor([239, 246, 255], [224, 231, 255], gradient)
      const inBadge = roundedRect(
        x,
        y,
        size * 0.12,
        size * 0.12,
        size * 0.76,
        size * 0.76,
        cornerRadius,
      )
      const dx = x - center
      const dy = y - center
      const inGlow = Math.sqrt(dx * dx + dy * dy) < radius
      let color = background

      if (inGlow) {
        color = mixColor(color, [219, 234, 254], 0.55)
      }

      if (inBadge) {
        color = mixColor([29, 78, 216], [79, 70, 229], gradient)
      }

      if (inBookShape(x, y, size)) {
        color = [255, 255, 255]
      }

      if (inBookSpine(x, y, size)) {
        color = [147, 197, 253]
      }

      if (inVolumeMark(x, y, size)) {
        color = [29, 78, 216]
      }

      pixels[index] = color[0]
      pixels[index + 1] = color[1]
      pixels[index + 2] = color[2]
      pixels[index + 3] = 255
    }
  }

  return encodePng(size, size, pixels)
}

function roundedRect(x, y, rectX, rectY, width, height, radius) {
  const left = rectX + radius
  const right = rectX + width - radius
  const top = rectY + radius
  const bottom = rectY + height - radius

  if (x >= left && x <= right && y >= rectY && y <= rectY + height) return true
  if (y >= top && y <= bottom && x >= rectX && x <= rectX + width) return true

  const corners = [
    [left, top],
    [right, top],
    [left, bottom],
    [right, bottom],
  ]

  return corners.some(([cx, cy]) => {
    const dx = x - cx
    const dy = y - cy
    return dx * dx + dy * dy <= radius * radius
  })
}

function inBookShape(x, y, size) {
  const left = size * 0.32
  const right = size * 0.7
  const top = size * 0.28
  const bottom = size * 0.72
  const lean = (y - top) * 0.08

  return x >= left + lean && x <= right + lean && y >= top && y <= bottom
}

function inBookSpine(x, y, size) {
  const left = size * 0.3
  const right = size * 0.37
  const top = size * 0.3
  const bottom = size * 0.74

  return x >= left && x <= right && y >= top && y <= bottom
}

function inVolumeMark(x, y, size) {
  const left = size * 0.42
  const right = size * 0.61
  const top = size * 0.39
  const bottom = size * 0.44

  return x >= left && x <= right && y >= top && y <= bottom
}

function mixColor(first, second, amount) {
  return first.map((channel, index) =>
    Math.round(channel + (second[index] - channel) * amount),
  )
}

function encodePng(width, height, rgba) {
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)

  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }

  const signature = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ])
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8
  header[9] = 6
  header[10] = 0
  header[11] = 0
  header[12] = 0

  return Buffer.concat([
    signature,
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type)
  const lengthBuffer = Buffer.alloc(4)
  lengthBuffer.writeUInt32BE(data.length, 0)
  const crcBuffer = Buffer.alloc(4)
  crcBuffer.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0)

  return Buffer.concat([lengthBuffer, typeBuffer, data, crcBuffer])
}

function crc32(buffer) {
  let crc = 0xffffffff

  for (const byte of buffer) {
    crc ^= byte
    for (let index = 0; index < 8; index += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1))
    }
  }

  return (crc ^ 0xffffffff) >>> 0
}
