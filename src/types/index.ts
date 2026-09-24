export type UserRole = 'artist' | 'agent' | 'venue' | 'tour-manager'

export interface NavItem {
  label: string
  icon: string
  active?: boolean
}

export type BadgeStatus = 'confirmed' | 'pending' | 'hold' | 'rejected'
