import { z } from 'zod';
import { CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema } from './CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInput.schema';
import { CityEnumWhereUniqueInputObjectSchema } from './CityEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => CityEnumCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
          z.lazy(
            () =>
              CityEnumUncheckedCreateWithoutBeneficiaryEntitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            CityEnumCreateOrConnectWithoutBeneficiaryEntitiesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => CityEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const CityEnumCreateNestedOneWithoutBeneficiaryEntitiesInputObjectSchema =
  Schema;
