import { Router, json } from "express";
import { RelationshipEnum } from "@models/relationshipEnum.model";
import { unGuardedPrisma } from "@config/db";

export const relationshipEnumRouter = Router();

relationshipEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
relationshipEnumRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.aggregate(input));
});
relationshipEnumRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.findFirst(input));
});
relationshipEnumRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.findMany(input));
});
relationshipEnumRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.relationshipEnum.findMany(input),
    unGuardedPrisma.relationshipEnum.count({ where: input?.where }),
    unGuardedPrisma.relationshipEnum.count(),
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
relationshipEnumRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.findUnique(input));
});
relationshipEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.findUniqueOrThrow(input));
});
relationshipEnumRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.groupBy(input));
});
relationshipEnumRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.relationshipEnum.count(input));
});
relationshipEnumRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.createMany(input));
});
relationshipEnumRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.create(input));
});
relationshipEnumRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.deleteMany(input));
});
relationshipEnumRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.delete(input));
});
relationshipEnumRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.updateMany(input));
});
relationshipEnumRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.update(input));
});
relationshipEnumRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.relationshipEnum.upsert(input));
});
