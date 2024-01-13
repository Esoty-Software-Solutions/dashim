import { z } from 'zod';
import { MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutBeneftiPackagesInput> =
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
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedOneWithoutBeneftiPackagesInputObjectSchema =
  Schema;
