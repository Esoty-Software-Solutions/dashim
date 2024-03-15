import { Router, json } from "express";
import { User } from "@models/user.model";
import { unGuardedPrisma } from "@config/db";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
userRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.aggregate(input));
});
userRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.findFirst(input));
});
userRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.findMany(input));
});
userRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.user.findMany(input),
    unGuardedPrisma.user.count({ where: input?.where }),
    unGuardedPrisma.user.count(),
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
userRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.findUnique(input));
});
userRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.findUniqueOrThrow(input));
});
userRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.groupBy(input));
});
userRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.user.count(input));
});
userRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.createMany(input));
});
userRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.create(input));
});
userRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.deleteMany(input));
});
userRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.delete(input));
});
userRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.updateMany(input));
});
userRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.update(input));
});
userRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.user.upsert(input));
});
