import { Router, json } from "express";
import { FaceBiometric } from "@models/faceBiometric.model";
import { unGuardedPrisma } from "@config/db";

export const faceBiometricRouter = Router();

faceBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
faceBiometricRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.aggregate(input));
});
faceBiometricRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.findFirst(input));
});
faceBiometricRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.findMany(input));
});
faceBiometricRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.faceBiometric.findMany(input),
    unGuardedPrisma.faceBiometric.count({ where: input?.where }),
    unGuardedPrisma.faceBiometric.count(),
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
faceBiometricRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.findUnique(input));
});
faceBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.findUniqueOrThrow(input));
});
faceBiometricRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.groupBy(input));
});
faceBiometricRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.faceBiometric.count(input));
});
faceBiometricRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.createMany(input));
});
faceBiometricRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.create(input));
});
faceBiometricRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.deleteMany(input));
});
faceBiometricRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.delete(input));
});
faceBiometricRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.updateMany(input));
});
faceBiometricRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.update(input));
});
faceBiometricRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.faceBiometric.upsert(input));
});
