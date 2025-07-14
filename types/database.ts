export interface Member {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  address?: string
  membership_type: "basic" | "premium" | "family"
  membership_status: "active" | "inactive" | "pending"
  join_date: string
  last_updated: string
  dynamics_id?: string
}

export interface Program {
  id: string
  title: string
  description?: string
  category?: string
  start_date?: string
  end_date?: string
  capacity?: number
  current_enrollment: number
  price: number
  status: "active" | "inactive" | "full"
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description?: string
  event_date: string
  location?: string
  capacity?: number
  current_registrations: number
  price: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  created_at: string
  updated_at: string
}

export interface Registration {
  id: string
  member_id: string
  event_id?: string
  program_id?: string
  registration_date: string
  status: "confirmed" | "pending" | "cancelled"
  payment_status: "pending" | "paid" | "refunded"
  amount_paid: number
  dynamics_sync_status: "pending" | "synced" | "failed"
}

export interface Content {
  id: string
  title: string
  content?: string
  content_type: "news" | "announcement" | "page"
  status: "draft" | "published" | "archived"
  featured: boolean
  publish_date?: string
  created_at: string
  updated_at: string
  author?: string
}

export interface Donation {
  id: string
  donor_email?: string
  donor_name?: string
  amount: number
  donation_type: "one-time" | "monthly" | "yearly"
  payment_method?: string
  payment_status: "pending" | "completed" | "failed"
  message?: string
  anonymous: boolean
  created_at: string
  dynamics_id?: string
}
