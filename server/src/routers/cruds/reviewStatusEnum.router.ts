import { Router, json } from "express";
import { ReviewStatusEnum } from "@models/reviewStatusEnum.model";
import { unGuardedPrisma } from "@config/db";

export const reviewStatusEnumRouter = Router();

reviewStatusEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
reviewStatusEnumRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.aggregate(input));
});
reviewStatusEnumRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.findFirst(input));
});
reviewStatusEnumRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.findMany(input));
});
reviewStatusEnumRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.reviewStatusEnum.findMany(input),
    unGuardedPrisma.reviewStatusEnum.count({ where: input?.where }),
    unGuardedPrisma.reviewStatusEnum.count(),
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
reviewStatusEnumRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.findUnique(input));
});
reviewStatusEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.findUniqueOrThrow(input));
});
reviewStatusEnumRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.groupBy(input));
});
reviewStatusEnumRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatusEnum.count(input));
});
reviewStatusEnumRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.createMany(input));
});
reviewStatusEnumRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.create(input));
});
reviewStatusEnumRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.deleteMany(input));
});
reviewStatusEnumRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.delete(input));
});
reviewStatusEnumRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.updateMany(input));
});
reviewStatusEnumRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.update(input));
});
reviewStatusEnumRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatusEnum.upsert(input));
});
