interface Status {
  name: string
}

interface Reference {
  name: string
  url: string
  tracker: number
}

interface Rating {
  name: string
}

interface Kpi {
  name: string
}

interface Reviewer {
  username: string
  fullname: string
  email: string
}

interface Incident {
  status: Status
  url: string
  comments_exists: boolean
  references: Reference[]
  rating: Rating | null
  incident_id: number
  emu: boolean
  project: string
  kpi: Kpi
  priority: number
  chk_result_m: any | null
  chk_result_q: any | null
  embargo: any | null
  crd: any | null
  prd: string
  deadline: string
  reviewers: User[]
}

interface Category {
  name: string
}

interface User {
  username: string
  fullname?: string
  email?: string
}

interface RejectReason {
  name: string
}

export interface Request {
  status: Status
  url: string
  comments_exists: boolean
  references: any[]
  rating: any | null
  incident: Incident
  category: Category
  unfinished_reviews: any[]
  reviewed_by: Reviewer[]
  released_by: User
  declined_by: any[]
  created_by: User
  channellist: any[]
  codestreams: string[]
  packages: string[]
  existing_staged_incidents: any[]
  existing_running_incidents: any[]
  request_id: number
  reject_reason: RejectReason
  kind: string
  created: string
  release_date: string
  qa_comments_exist: boolean
  eco_state: any | null
}
