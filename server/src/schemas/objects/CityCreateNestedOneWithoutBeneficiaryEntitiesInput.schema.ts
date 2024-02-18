import { z } from 'zod';
import { CityCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CityCreateWithoutBeneficiaryEntitiesInputObjectSchema),
          z.lazy(
            () =>
              CityUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CityCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CityCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema =
  Schema;
