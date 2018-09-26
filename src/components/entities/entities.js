
import validator from 'validator';


const minNameLength = 1;
const maxNameLength = 100;
const minDescriptionLength = 1;
export const maxDescriptionLength = 400;

const minPharmacodeLength = 4;
const maxPharmacodeLength = 32;
const minBarcodeLength = 4;
const maxBarcodeLength = 128;
const minNzulmNumberLength = 4;
const maxNzulmNumberLength = 32;

const minPackSizeLength = 1;
const maxPackSizeLength = 10000;

const minPackSizeUnitLength = 1;
const maxPackSizeUnitLength = 16;

const minMedicationStrengthLength = 1;
const maxMedicationStrengthLength = 16;

const minMedicationStrengthUnitLength = 1;
const maxMedicationStrengthUnitLength = 16;

const minLookupNameLength = 1;
const maxLookupNameLength = 200;

export function isName(nameDirty) {
  if (!nameDirty) {
    return 'Name is required';
  }
  const name = String(nameDirty);
  if (!validator.isLength(name, { min: minNameLength, max: maxNameLength })) {
    return `Medication name's must be between ${minNameLength} and ${maxNameLength} characters`;
  }
  if (!validator.isAscii(name)) {
    return 'Medication name\'s must contain only typeable characters';
  }
  return undefined;
}

export function isField(fieldDirty) {
  if (!fieldDirty) {
    return 'Field is required';
  }
  if (!validator.isAscii(fieldDirty)) {
    return 'Medication name\'s must contain only typeable characters';
  }
  return undefined;
}

export function isDescription(descriptionDirty) {
  if (!descriptionDirty) {
    return 'Description is required';
  }
  const description = String(descriptionDirty);
  if (!validator.isLength(description, { min: minDescriptionLength, max: maxDescriptionLength })) {
    return `Description must be between ${minDescriptionLength} and ${maxDescriptionLength} characters`;
  }
  if (!validator.isAscii(description)) {
    return 'Description must contain only typeable characters';
  }
  return undefined;
}
export function isPrice(price) {
  if (!price) {
    return 'Price is required';
  }
  if (!validator.isFloat(price, { gt: 0 })) {
    return 'Price must be a value greater than zero (0.00)';
  }
  return undefined;
}
export function isFreight(dirtyPrice) {
  if (!dirtyPrice && dirtyPrice !== 0) {
    return 'Freight is required';
  }
  const price = String(dirtyPrice);
  if (!validator.isFloat(price, { min: 0 })) {
    return 'Freight must be a zero (0.00) or more';
  }
  return undefined;
}
export function isPharmacode(pharmacodeDirty, values) {
  if (!pharmacodeDirty) {
    return 'Pharmacode is required';
  }
  const pharmacode = String(pharmacodeDirty);
  if (!validator.isLength(pharmacode, { min: minPharmacodeLength, max: maxPharmacodeLength })) {
    return `Pharmacode must be between ${minPharmacodeLength} and ${maxPharmacodeLength} characters`;
  }
  if (!validator.isAscii(pharmacode)) {
    return 'Pharmacode must contain only typeable characters';
  }
  if (values.pharmacodeRemote) {
    return values.pharmacodeRemote;
  }
  return undefined;
}

export function isNzulmNumber(nzulmNumberDirty, values) {
  if (!nzulmNumberDirty) {
    return 'NZULM Number is required';
  }
  const nzulmNumber = String(nzulmNumberDirty);
  if (!validator.isLength(nzulmNumber, { min: minNzulmNumberLength, max: maxNzulmNumberLength })) {
    return `NZULM Number must be between ${minNzulmNumberLength} and ${maxNzulmNumberLength} characters`;
  }
  if (!validator.isAscii(nzulmNumber)) {
    return 'NZULM Number must contain only typeable characters';
  }
  if (values.nzulmNumberRemote) {
    return values.nzulmNumberRemote;
  }
  return undefined;
}
export function isBarcode(barcodeDirty, values) {
  if (!barcodeDirty) {
    return 'Barcode is required';
  }
  const barcode = String(barcodeDirty);
  if (!validator.isLength(barcode, { min: minBarcodeLength, max: maxBarcodeLength })) {
    return `Barcode must be between ${minBarcodeLength} and ${maxBarcodeLength} characters`;
  }
  if (!validator.isAscii(barcode)) {
    return 'Barcode must contain only typeable characters';
  }
  if (values.barcodeRemote) {
    return values.barcodeRemote;
  }
  return undefined;
}

export function isPackSize(packSizeDirty) {
  if (!packSizeDirty) {
    return 'Pack Size is required';
  }
  const packSize = String(packSizeDirty);
  if (!validator.isFloat(packSize, { min: minPackSizeLength, max: maxPackSizeLength })) {
    return `Pack Size can be ${minPackSizeLength} to ${maxPackSizeLength}`;
  }
  return undefined;
}

export function isPackSizeUnit(unitDirty) {
  if (!unitDirty) {
    return 'Unit is required';
  }
  const unit = String(unitDirty);
  if (!validator.isLength(unit, { min: minPackSizeUnitLength, max: maxPackSizeUnitLength })) {
    return `Unit must be between ${minPackSizeUnitLength} and ${maxPackSizeUnitLength} characters`;
  }
  if (!validator.isAscii(unit)) {
    return 'Unit must be typeable character';
  }
  return undefined;
}
export function isLookupName(nameDirty) {
  if (!nameDirty) {
    return 'A lookup name is required';
  }
  const name = String(nameDirty);
  if (!validator.isLength(name, { min: minLookupNameLength, max: maxLookupNameLength })) {
    return `Medication lookup name's must be between ${minLookupNameLength} and ${maxLookupNameLength} characters`;
  }
  if (!validator.isAscii(name)) {
    return 'Medication lookup name\'s must contain only typeable characters';
  }
  return undefined;
}


export function medicationSupplyInDays(medication) {
  try {
    if (medication.servingSize * medication.servingsPerDay === 0) {
      return '';
    }
    const daysSupplyPerOrder =
      Math.floor(
        (medication.packSize * medication.numberOfPacks) /
        (medication.servingSize * medication.servingsPerDay));
    return daysSupplyPerOrder;
  } catch (e) {
    return '';
  }
}
