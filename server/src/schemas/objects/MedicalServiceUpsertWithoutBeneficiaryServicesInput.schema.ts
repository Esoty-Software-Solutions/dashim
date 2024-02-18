import { z } from 'zod';
import { MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithoutBeneficiaryServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpsertWithoutBeneficiaryServicesInputObjectSchema =
  Schema;
