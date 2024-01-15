import { z } from 'zod';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput> =
  z
    .object({
      where: z.lazy(
        () => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema =
  Schema;
