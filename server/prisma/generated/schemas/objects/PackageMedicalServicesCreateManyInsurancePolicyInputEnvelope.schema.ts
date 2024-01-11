import { z } from 'zod';
import { PackageMedicalServicesCreateManyInsurancePolicyInputObjectSchema } from './PackageMedicalServicesCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            PackageMedicalServicesCreateManyInsurancePolicyInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PackageMedicalServicesCreateManyInsurancePolicyInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PackageMedicalServicesCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
