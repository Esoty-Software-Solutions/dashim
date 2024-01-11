import { z } from 'zod';
import { MedicalCenterUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutBeneftiPackagesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalCenterUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterUpsertWithoutBeneftiPackagesInputObjectSchema =
  Schema;
