-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roleName" DROP DEFAULT;

-- CreateTable
CREATE TABLE "UserRole" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_name_key" ON "UserRole"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleName_fkey" FOREIGN KEY ("roleName") REFERENCES "UserRole"("name") ON DELETE RESTRICT ON UPDATE CASCADE;


-- Insert default roles
INSERT INTO "UserRole" ("name", "description", "createdAt", "updatedAt") VALUES
('EmsxAdmin', 'Emsx Admin role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Student', 'Student role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('UniverstityMember', 'Universtity Member role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('PlacementProviderMember', 'Placement Provider Member role', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);