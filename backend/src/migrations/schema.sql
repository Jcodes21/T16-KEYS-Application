-- Define the users table with UserRole enum and common fields
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR NOT NULL,  -- First name of the user
    last_name VARCHAR NOT NULL,   -- Last name of the user
    email VARCHAR NOT NULL,       -- Email of the user
    role VARCHAR CHECK (role IN ('RESIDENT', 'TRADESPERSON', 'MAINTENANCE_ENGINEER')) DEFAULT 'RESIDENT',  -- Enum-like constraint for user role
    active BOOLEAN DEFAULT TRUE,  -- Whether the user is active
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the residents table
CREATE TABLE residents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    street VARCHAR,
    city VARCHAR,
    state VARCHAR,
    postal_code VARCHAR,
    country VARCHAR,
    latitude FLOAT,
    longitude FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the maintenance_engineers table
CREATE TABLE maintenance_engineers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    department VARCHAR NOT NULL,
    qualification VARCHAR NOT NULL,
    years_experience FLOAT,
    company_name VARCHAR NOT NULL,
    company_contact VARCHAR,
    latitude FLOAT,
    longitude FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the faultReports table with relationships to residents and maintenance_engineers
CREATE TABLE faultReports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resident_id UUID REFERENCES residents(id) ON DELETE CASCADE,  -- Foreign key to residents table
    engineer_id UUID REFERENCES maintenance_engineers(id) ON DELETE SET NULL,  -- Foreign key to maintenance_engineers table
    description TEXT,
    status VARCHAR CHECK (status IN ('PENDING', 'UNDER_REVIEW', 'NEEDS_REPAIR', 'IN_PROGRESS', 'ESCALATED', 'ON_HOLD', 'CANCELED', 'RESOLVED')) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the bookings table with relationships to residents, tradespersons, and engineers
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date TIMESTAMP NOT NULL,  -- Booking date
    status VARCHAR CHECK (status IN ('SCHEDULED', 'COMPLETED', 'CANCELED')) DEFAULT 'SCHEDULED',  -- Booking status
    resident_id UUID REFERENCES residents(id) ON DELETE SET NULL,  -- Foreign key to residents table (resident making the booking)
    tradesperson_id UUID REFERENCES residents(id) ON DELETE SET NULL,  -- Foreign key to tradesperson in residents table
    engineer_id UUID REFERENCES maintenance_engineers(id) ON DELETE SET NULL,  -- Foreign key to maintenance_engineers table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the tradespeople table
CREATE TABLE tradespeople (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trade VARCHAR,  -- The trade that the tradesperson specializes in (e.g., plumber, electrician)
    qualifications VARCHAR,  -- Qualifications of the tradesperson
    company VARCHAR,  -- The company the tradesperson works for
    contact VARCHAR,  -- The contact information for the tradesperson/company
    available BOOLEAN DEFAULT TRUE,  -- Whether the tradesperson is available for work
    street VARCHAR,  -- Street address (nullable)
    city VARCHAR,  -- City (nullable)
    state VARCHAR,  -- State (nullable)
    postal_code VARCHAR,  -- Postal code (nullable)
    country VARCHAR,  -- Country (nullable)
    latitude FLOAT,  -- Latitude for geolocation (nullable)
    longitude FLOAT,  -- Longitude for geolocation (nullable)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Define the notifications table with relationship to User and enum NotificationType
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR CHECK (type IN ('FAULT_UPDATE', 'BOOKING_REMINDER', 'SURVEY_INVITE')) NOT NULL,  -- Enum-like constraint for notification type
    message TEXT NOT NULL,  -- The notification message content
    is_read BOOLEAN DEFAULT FALSE,  -- Whether the notification has been read
    user_id UUID REFERENCES residents(id) ON DELETE SET NULL,  -- Foreign key to residents table as a User reference
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
