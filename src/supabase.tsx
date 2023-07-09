import { createClient } from '@supabase/supabase-js'
const API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZG9qb295cXBsb29neXZubXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMDAxNzAsImV4cCI6MjAwMzc3NjE3MH0.9eRIuv-RY9rC7sgyM_QsoakRfwuCSASnvhpnd8baXI0"
const URL ="https://uodojooyqploogyvnmqm.supabase.co"

// const supabaseUrl = process.env.URL!
// const supabaseAnonKey = process.env.API_KEY!
// console.log(process.env.URL);

export const supabase = createClient(URL, API_KEY)