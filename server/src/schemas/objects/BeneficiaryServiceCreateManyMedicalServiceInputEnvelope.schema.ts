import { z } from 'zod';
import { BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateManyMedicalServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficiaryServiceCreateManyMedicalServiceInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryServiceCreateManyMedicalServiceInputEnvelopeObjectSchema =
  Schema;
