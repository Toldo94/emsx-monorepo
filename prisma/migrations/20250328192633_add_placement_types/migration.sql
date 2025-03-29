-- This is an empty migration.
-- Insert Placement Types into Attribute table
INSERT INTO "Attribute" ("name", "order", "typeName", "createdAt", "updatedAt") VALUES
('1st Opinion', 1, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Referral', 2, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Business', 3, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Laboratory', 4, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Military', 5, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Government And Public Health', 6, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Research', 7, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Conference', 8, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Other', 9, 'placementType', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


