import { z } from 'zod';
import { MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUpsertWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUpsertWithoutBeneftiPackagesInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateOneRequiredWithoutBeneftiPackagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => MedicalCenterUpsertWithoutBeneftiPackagesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MedicalCenterUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema =
  Schema;
