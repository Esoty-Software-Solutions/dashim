import { Router, json } from "express";
import { FingerTypeEnum } from "@models/fingerTypeEnum.model";
import { unGuardedPrisma } from "@config/db";

export const fingerTypeEnumRouter = Router();

fingerTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
fingerTypeEnumRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.aggregate(input));
});
fingerTypeEnumRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.findFirst(input));
});
fingerTypeEnumRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.findMany(input));
});
fingerTypeEnumRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.fingerTypeEnum.findMany(input),
    unGuardedPrisma.fingerTypeEnum.count({ where: input?.where }),
    unGuardedPrisma.fingerTypeEnum.count(),
  ]);
  const statistics: {
    key: string;
    value: string | number | boolean;
  }[] = [];
  res.json({
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  });
});
fingerTypeEnumRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.findUnique(input));
});
fingerTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.findUniqueOrThrow(input));
});
fingerTypeEnumRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.groupBy(input));
});
fingerTypeEnumRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerTypeEnum.count(input));
});
fingerTypeEnumRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.createMany(input));
});
fingerTypeEnumRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.create(input));
});
fingerTypeEnumRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.deleteMany(input));
});
fingerTypeEnumRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.delete(input));
});
fingerTypeEnumRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.updateMany(input));
});
fingerTypeEnumRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.update(input));
});
fingerTypeEnumRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerTypeEnum.upsert(input));
});
