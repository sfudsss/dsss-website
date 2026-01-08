-- Create participants table for event registrations
CREATE TABLE IF NOT EXISTS public.participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT NOT NULL,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  student_id TEXT,
  program TEXT,
  year_level TEXT,
  dietary_restrictions TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  team_name TEXT,
  team_size INTEGER,
  experience_level TEXT,
  skills TEXT[],
  github_username TEXT,
  linkedin_url TEXT,
  shirt_size TEXT,
  how_heard_about TEXT,
  additional_info TEXT,
  registration_status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on event_id and email for faster queries
CREATE INDEX IF NOT EXISTS idx_participants_event_id ON public.participants(event_id);
CREATE INDEX IF NOT EXISTS idx_participants_email ON public.participants(email);

-- Enable Row Level Security
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "participants_insert_public"
  ON public.participants FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins can view all participants
CREATE POLICY "participants_select_admin"
  ON public.participants FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND raw_user_meta_data->>'is_admin' = 'true'
    )
  );

-- Only authenticated admins can update participants
CREATE POLICY "participants_update_admin"
  ON public.participants FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND raw_user_meta_data->>'is_admin' = 'true'
    )
  );

-- Only authenticated admins can delete participants
CREATE POLICY "participants_delete_admin"
  ON public.participants FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND raw_user_meta_data->>'is_admin' = 'true'
    )
  );
