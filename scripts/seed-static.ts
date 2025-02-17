import dotenv from 'dotenv';

import dbConnect from '@/lib/db';
import Species from '@/models/Species';
import PlacementType from '@/models/PlacementType';
import PracticeInterests from '@/models/PracticeInterests';


const PLACEMENT_TYPE = [
    { searchName: "firstOpinion", name: "1st Opinion", order: 1 },
    { searchName: "referral", name: "Referral", order: 2 },
    { searchName: "business", name: "Business", order: 3 },
    { searchName: "laboratory", name: "Laboratory", order: 4 },
    { searchName: "military", name: "Military", order: 5 },
    { searchName: "governmentAndPublicHealth", name: "Government And Public Health", order: 6 },
    { searchName: "research", name: "Research", order: 7 },
    { searchName: "conference", name: "Conference", order: 8 },
    { searchName: "other", name: "Other", order: 9 },
];


const PRACTICE_INTERESTS = [
  { name: "Alternative Medicine (e.g. Acupuncture)", searchName: "alternativeMedicine", order: 1 },
  { name: "Anaesthesia", searchName: "anaesthesia", order: 2 },
  { name: "Behaviour", searchName: "behaviour", order: 3 },
  { name: "Cardiology", searchName: "cardiology", order: 4 },
  { name: "Dentistry", searchName: "dentistry", order: 5 },
  { name: "Dermatology", searchName: "dermatology", order: 6 },
  { name: "Diagnostic Imaging", searchName: "diagnosticImaging", order: 7 },
  { name: "Emergency and Critical Care", searchName: "emergencyAndCriticalCare", order: 8 },
  { name: "Internal Medicine", searchName: "internalMedicine", order: 9 },
  { name: "Laproscopy", searchName: "laproscopy", order: 10 },
  { name: "Neurology", searchName: "neurology", order: 11 },
  { name: "Nutrition", searchName: "nutrition", order: 12 },
  { name: "Oncology", searchName: "oncology", order: 13 },
  { name: "Ophthalmology", searchName: "ophthalmology", order: 14 },
  { name: "Orthopaedic Surgery", searchName: "orthopaedicSurgery", order: 15 },
  { name: "Parasitology", searchName: "parasitology", order: 16 },
  { name: "Pathology", searchName: "pathology", order: 17 },
  { name: "Rehab (e.g. Physiotherapy)", searchName: "rehab", order: 18 },
  { name: "Reproduction", searchName: "reproduction", order: 19 },
  { name: "Soft Tissue Surgery", searchName: "softTissueSurgery", order: 20 },
  { name: "Toxicology", searchName: "toxicology", order: 21 },
];

const SPECIES = [
    { searchName: "aquatics", name: "Aquatics", order: 1 },
    { searchName: "birds", name: "Birds", order: 2 },
    { searchName: "camelids", name: "Camelids", order: 3 },
    { searchName: "cats", name: "Cats", order: 4 },
    { searchName: "cattle", name: "Cattle", order: 5 },
    { searchName: "deer", name: "Deer", order: 6 },
    { searchName: "dogs", name: "Dogs", order: 7 },
    { searchName: "equine", name: "Equines", order: 8 },
    { searchName: "exotics_wild", name: "Exotic/Wild", order: 9 },
    { searchName: "pigs", name: "Pigs", order: 10 },
    { searchName: "poultry", name: "Poultry", order: 11 },
    { searchName: "sheep_goats", name: "Sheep/Goats", order: 12 },
    { searchName: "small_mammals", name: "Small Mammals", order: 13 },
    { searchName: "other", name: "Other", order: 14 },
];



async function main() {
    dotenv.config();
    await dbConnect();

    await Species.deleteMany({});
    await PlacementType.deleteMany({});
    await PracticeInterests.deleteMany({});

    for (const type of PLACEMENT_TYPE) {
        await PlacementType.create(type);
    }

    for (const interest of PRACTICE_INTERESTS) {
        await PracticeInterests.create(interest);
    }

    for (const species of SPECIES) {
        await Species.create(species);
    }
}

async function runMain() {
    try {
        await main();
        console.log("Seed completed");
        process.exit(0);
    } catch (e) {
        console.error(e);
        console.log("Seed failed");
        process.exit(1);
    }
}

runMain();
