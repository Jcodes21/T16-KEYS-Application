-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('RESIDENT', 'TRADESPERSON', 'MAINTENANCE_ENGINEER');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('FAULT_UPDATE', 'BOOKING_REMINDER', 'SURVEY_INVITE');

-- CreateEnum
CREATE TYPE "FaultStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'NEEDS_REPAIR', 'IN_PROGRESS', 'ESCALATED', 'ON_HOLD', 'CANCELED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('SCHEDULED', 'RESCHEDULED', 'ON_HOLD', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "TradeType" AS ENUM ('HANDYPERSON', 'PLUMBER', 'ELECTRICIAN', 'CARPENTER', 'PAINTER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resident" (
    "userId" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Resident_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Tradesperson" (
    "userId" TEXT NOT NULL,
    "trade" "TradeType" NOT NULL,
    "qualification" TEXT NOT NULL,
    "verifyQualificationId" TEXT NOT NULL,
    "qualificationVerifiedAt" TIMESTAMP(3),
    "yearsExperience" DOUBLE PRECISION,
    "companyName" TEXT NOT NULL,
    "companyContact" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Tradesperson_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "MaintenanceEngineer" (
    "userId" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "verifyQualificationId" TEXT NOT NULL,
    "qualificationVerifiedAt" TIMESTAMP(3),
    "companyName" TEXT NOT NULL,
    "companyContact" TEXT,
    "yearsExperience" DOUBLE PRECISION,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "MaintenanceEngineer_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "FaultReport" (
    "id" TEXT NOT NULL,
    "residentId" TEXT NOT NULL,
    "engineerId" TEXT,
    "description" TEXT NOT NULL,
    "mediaUrl" TEXT,
    "mediaFile" TEXT,
    "status" "FaultStatus" NOT NULL DEFAULT 'PENDING',
    "bookingDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaultReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "faultReportId" TEXT NOT NULL,
    "engineerId" TEXT,
    "tradespersonId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "faultReportId" TEXT NOT NULL,
    "serviceQualityRating" INTEGER NOT NULL,
    "responseTimeRating" INTEGER NOT NULL,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Resident_postalCode_idx" ON "Resident"("postalCode");

-- CreateIndex
CREATE INDEX "Resident_city_idx" ON "Resident"("city");

-- CreateIndex
CREATE INDEX "Tradesperson_postalCode_idx" ON "Tradesperson"("postalCode");

-- CreateIndex
CREATE INDEX "Tradesperson_city_idx" ON "Tradesperson"("city");

-- CreateIndex
CREATE INDEX "Tradesperson_trade_idx" ON "Tradesperson"("trade");

-- CreateIndex
CREATE INDEX "MaintenanceEngineer_postalCode_idx" ON "MaintenanceEngineer"("postalCode");

-- CreateIndex
CREATE INDEX "MaintenanceEngineer_city_idx" ON "MaintenanceEngineer"("city");

-- CreateIndex
CREATE INDEX "FaultReport_createdAt_idx" ON "FaultReport"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_faultReportId_key" ON "Booking"("faultReportId");

-- CreateIndex
CREATE INDEX "Booking_date_idx" ON "Booking"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Survey_faultReportId_key" ON "Survey"("faultReportId");

-- AddForeignKey
ALTER TABLE "Resident" ADD CONSTRAINT "Resident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tradesperson" ADD CONSTRAINT "Tradesperson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceEngineer" ADD CONSTRAINT "MaintenanceEngineer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaultReport" ADD CONSTRAINT "FaultReport_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "Resident"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaultReport" ADD CONSTRAINT "FaultReport_engineerId_fkey" FOREIGN KEY ("engineerId") REFERENCES "MaintenanceEngineer"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_faultReportId_fkey" FOREIGN KEY ("faultReportId") REFERENCES "FaultReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_engineerId_fkey" FOREIGN KEY ("engineerId") REFERENCES "MaintenanceEngineer"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tradespersonId_fkey" FOREIGN KEY ("tradespersonId") REFERENCES "Tradesperson"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Survey" ADD CONSTRAINT "Survey_faultReportId_fkey" FOREIGN KEY ("faultReportId") REFERENCES "FaultReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
