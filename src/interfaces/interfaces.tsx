export interface EditedProfile {
  name: string,
  avtar_url: string,
  favorite: string
}

export interface IProfile {
  name: string,
  avtar_url: string,
  favorite: string,
  id: string,
  created_at: string
}

export interface INotice {
  id: string,
  created_at: string,
  user_id: string,
  content: string,
}

export interface IEditedNotice {
  content: string,
}
