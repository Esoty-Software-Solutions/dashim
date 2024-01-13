import { z } from 'zod';
import { PackageMedicalServicesCreateManyBeneftiPackageInputObjectSchema } from './PackageMedicalServicesCreateManyBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesCreateManyBeneftiPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => PackageMedicalServicesCreateManyBeneftiPackageInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PackageMedicalServicesCreateManyBeneftiPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PackageMedicalServicesCreateManyBeneftiPackageInputEnvelopeObjectSchema =
  Schema;
