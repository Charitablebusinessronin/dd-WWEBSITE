-- Insert sample programs
INSERT INTO programs (title, description, category, start_date, end_date, capacity, price) VALUES
('Youth Basketball League', 'Weekly basketball games for ages 12-18', 'Sports', '2024-02-01', '2024-05-31', 30, 25.00),
('Senior Fitness Classes', 'Low-impact exercise classes for seniors', 'Fitness', '2024-01-15', '2024-12-31', 20, 15.00),
('Computer Literacy Workshop', 'Basic computer skills for beginners', 'Education', '2024-02-15', '2024-03-15', 15, 0.00),
('Community Garden Project', 'Learn sustainable gardening practices', 'Environment', '2024-03-01', '2024-10-31', 25, 10.00);

-- Insert sample events
INSERT INTO events (title, description, event_date, location, capacity, price) VALUES
('Annual Community BBQ', 'Join us for food, music, and community fellowship', '2024-07-04 12:00:00', 'Community Center Main Hall', 200, 5.00),
('Health & Wellness Fair', 'Free health screenings and wellness information', '2024-03-15 09:00:00', 'Community Center Gymnasium', 150, 0.00),
('Holiday Toy Drive Kickoff', 'Launch event for our annual toy drive', '2024-11-01 18:00:00', 'Community Center Auditorium', 100, 0.00);

-- Insert sample content
INSERT INTO content (title, content, content_type, status, featured, publish_date, author) VALUES
('Welcome to Our Community Center', 'We are excited to serve our community with programs and services that make a difference...', 'page', 'published', true, NOW(), 'Admin'),
('New Youth Programs Starting Soon', 'We are launching several new programs for youth this spring...', 'news', 'published', true, NOW(), 'Program Director'),
('Volunteer Opportunities Available', 'Looking for ways to give back? We have several volunteer opportunities...', 'announcement', 'published', false, NOW(), 'Volunteer Coordinator');
