import { z } from 'zod';

export const BeneficiaryBalanceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'beneficiaryId',
  'beneftiPackageId',
  'balancePending',
  'balanceActual',
]);
