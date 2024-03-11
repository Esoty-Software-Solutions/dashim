import { Router, json } from "express";
import { ReviewStatus } from "@models/reviewStatus.model";
import { unGuardedPrisma } from "@config/db";

export const reviewStatusRouter = Router();

reviewStatusRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
reviewStatusRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.aggregate(input));
});
reviewStatusRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.findFirst(input));
});
reviewStatusRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.findMany(input));
});
reviewStatusRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.reviewStatus.findMany(input),
    unGuardedPrisma.reviewStatus.count({ where: input?.where }),
    unGuardedPrisma.reviewStatus.count(),
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
reviewStatusRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.findUnique(input));
});
reviewStatusRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.findUniqueOrThrow(input));
});
reviewStatusRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.groupBy(input));
});
reviewStatusRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.reviewStatus.count(input));
});
reviewStatusRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.createMany(input));
});
reviewStatusRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.create(input));
});
reviewStatusRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.deleteMany(input));
});
reviewStatusRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.delete(input));
});
reviewStatusRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.updateMany(input));
});
reviewStatusRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.update(input));
});
reviewStatusRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.reviewStatus.upsert(input));
});
