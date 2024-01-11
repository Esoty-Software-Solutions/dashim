import { z } from 'zod';
import { PackageMedicalServicesCreateManyMedicalServiceInputObjectSchema } from './PackageMedicalServicesCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateManyMedicalServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => PackageMedicalServicesCreateManyMedicalServiceInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PackageMedicalServicesCreateManyMedicalServiceInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PackageMedicalServicesCreateManyMedicalServiceInputEnvelopeObjectSchema =
  Schema;
