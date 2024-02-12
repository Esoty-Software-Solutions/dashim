import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      where: z.lazy(() => CityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CityCreateWithoutBeneficiaryEntitiesInputObjectSchema),
        z.lazy(
          () => CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CityCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema =
  Schema;
