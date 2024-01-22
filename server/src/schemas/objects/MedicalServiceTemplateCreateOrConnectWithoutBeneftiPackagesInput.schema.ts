import { z } from 'zod';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';
import { MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema =
  Schema;
