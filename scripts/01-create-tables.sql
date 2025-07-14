-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create members table
CREATE TABLE IF NOT EXISTS members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  membership_type VARCHAR(50) DEFAULT 'basic',
  membership_status VARCHAR(20) DEFAULT 'active',
  join_date TIMESTAMP DEFAULT NOW(),
  last_updated TIMESTAMP DEFAULT NOW(),
  dynamics_id VARCHAR(100) -- For D365 integration
);

-- Create programs table
CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  start_date DATE,
  end_date DATE,
  capacity INTEGER,
  current_enrollment INTEGER DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0.00,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  event_date TIMESTAMP NOT NULL,
  location VARCHAR(200),
  capacity INTEGER,
  current_registrations INTEGER DEFAULT 0,
  price DECIMAL(10,2) DEFAULT 0.00,
  status VARCHAR(20) DEFAULT 'upcoming',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create registrations table (for events and programs)
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
  registration_date TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'confirmed',
  payment_status VARCHAR(20) DEFAULT 'pending',
  amount_paid DECIMAL(10,2) DEFAULT 0.00,
  dynamics_sync_status VARCHAR(20) DEFAULT 'pending'
);

-- Create content management table
CREATE TABLE IF NOT EXISTS content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  content_type VARCHAR(50), -- 'news', 'announcement', 'page'
  status VARCHAR(20) DEFAULT 'draft',
  featured BOOLEAN DEFAULT FALSE,
  publish_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  author VARCHAR(100)
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_email VARCHAR(255),
  donor_name VARCHAR(200),
  amount DECIMAL(10,2) NOT NULL,
  donation_type VARCHAR(50) DEFAULT 'one-time', -- 'one-time', 'monthly', 'yearly'
  payment_method VARCHAR(50),
  payment_status VARCHAR(20) DEFAULT 'pending',
  message TEXT,
  anonymous BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  dynamics_id VARCHAR(100)
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Create policies (basic - you can customize these)
CREATE POLICY "Public can view active programs" ON programs
  FOR SELECT USING (status = 'active');

CREATE POLICY "Public can view upcoming events" ON events
  FOR SELECT USING (status = 'upcoming');

CREATE POLICY "Public can view published content" ON content
  FOR SELECT USING (status = 'published');
