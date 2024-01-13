import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutBeneftiPackagesInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
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

export const MedicalCenterCreateOrConnectWithoutBeneftiPackagesInputObjectSchema =
  Schema;
