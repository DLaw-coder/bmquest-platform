const MIN_NICKNAME_LENGTH = 3
const MAX_NICKNAME_LENGTH = 32

const blockedNicknameTerms = [
  'anjing',
  'asshole',
  'babi',
  'bangang',
  'bastard',
  'bitch',
  'bodoh',
  'fuck',
  'lancau',
  'puki',
  'shit',
  'sial',
]

export type NicknameValidationResult = {
  nickname: string
  nicknameKey: string
}

export function validateNickname(value: string): NicknameValidationResult {
  const nickname = normalizeNickname(value)
  const nicknameKey = createNicknameKey(nickname)

  if (nickname.length < MIN_NICKNAME_LENGTH) {
    throw new Error('Nickname must be at least 3 characters.')
  }

  if (nickname.length > MAX_NICKNAME_LENGTH) {
    throw new Error('Nickname must be 32 characters or fewer.')
  }

  if (!nicknameKey) {
    throw new Error('Nickname must include letters or numbers.')
  }

  if (containsBlockedTerm(nicknameKey)) {
    throw new Error('That nickname is not allowed. Please choose another one.')
  }

  return {
    nickname,
    nicknameKey,
  }
}

function normalizeNickname(value: string) {
  return value.trim().replace(/\s+/g, ' ')
}

export function createNicknameKey(value: string) {
  return normalizeNickname(value)
    .toLocaleLowerCase('en-MY')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}

function containsBlockedTerm(nicknameKey: string) {
  const compactNicknameKey = nicknameKey.replaceAll('-', '')
  const nicknameParts = nicknameKey.split('-')

  return blockedNicknameTerms.some((term) => (
    nicknameParts.includes(term) || compactNicknameKey.includes(term)
  ))
}
