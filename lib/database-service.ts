import { supabase } from "./supabase"
import type { Member, Program, Event, Registration, Content, Donation } from "@/types/database"

export class DatabaseService {
  // Members
  static async getMembers() {
    const { data, error } = await supabase.from("members").select("*").order("join_date", { ascending: false })

    if (error) throw error
    return data as Member[]
  }

  static async createMember(member: Omit<Member, "id" | "join_date" | "last_updated">) {
    const { data, error } = await supabase.from("members").insert([member]).select().single()

    if (error) throw error
    return data as Member
  }

  // Programs
  static async getActivePrograms() {
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .eq("status", "active")
      .order("start_date", { ascending: true })

    if (error) throw error
    return data as Program[]
  }

  static async createProgram(program: Omit<Program, "id" | "created_at" | "updated_at" | "current_enrollment">) {
    const { data, error } = await supabase.from("programs").insert([program]).select().single()

    if (error) throw error
    return data as Program
  }

  // Events
  static async getUpcomingEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("status", "upcoming")
      .gte("event_date", new Date().toISOString())
      .order("event_date", { ascending: true })

    if (error) throw error
    return data as Event[]
  }

  static async createEvent(event: Omit<Event, "id" | "created_at" | "updated_at" | "current_registrations">) {
    const { data, error } = await supabase.from("events").insert([event]).select().single()

    if (error) throw error
    return data as Event
  }

  // Registrations
  static async createRegistration(
    registration: Omit<Registration, "id" | "registration_date" | "dynamics_sync_status">,
  ) {
    const { data, error } = await supabase.from("registrations").insert([registration]).select().single()

    if (error) throw error
    return data as Registration
  }

  // Content
  static async getPublishedContent(contentType?: string) {
    let query = supabase.from("content").select("*").eq("status", "published")

    if (contentType) {
      query = query.eq("content_type", contentType)
    }

    const { data, error } = await query.order("publish_date", { ascending: false })

    if (error) throw error
    return data as Content[]
  }

  static async getFeaturedContent() {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .eq("status", "published")
      .eq("featured", true)
      .order("publish_date", { ascending: false })
      .limit(3)

    if (error) throw error
    return data as Content[]
  }

  // Donations
  static async createDonation(donation: Omit<Donation, "id" | "created_at">) {
    const { data, error } = await supabase.from("donations").insert([donation]).select().single()

    if (error) throw error
    return data as Donation
  }

  static async getDonations(limit = 50) {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as Donation[]
  }
}
