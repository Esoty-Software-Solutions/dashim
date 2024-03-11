import { Router, json } from "express";
import { FingerprintBiometric } from "@models/fingerprintBiometric.model";
import { unGuardedPrisma } from "@config/db";

export const fingerprintBiometricRouter = Router();

fingerprintBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
fingerprintBiometricRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.aggregate(input));
});
fingerprintBiometricRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.findFirst(input));
});
fingerprintBiometricRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.findMany(input));
});
fingerprintBiometricRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.fingerprintBiometric.findMany(input),
    unGuardedPrisma.fingerprintBiometric.count({ where: input?.where }),
    unGuardedPrisma.fingerprintBiometric.count(),
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
fingerprintBiometricRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.findUnique(input));
});
fingerprintBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.findUniqueOrThrow(input));
});
fingerprintBiometricRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.groupBy(input));
});
fingerprintBiometricRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.fingerprintBiometric.count(input));
});
fingerprintBiometricRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.createMany(input));
});
fingerprintBiometricRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.create(input));
});
fingerprintBiometricRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.deleteMany(input));
});
fingerprintBiometricRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.delete(input));
});
fingerprintBiometricRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.updateMany(input));
});
fingerprintBiometricRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.update(input));
});
fingerprintBiometricRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.fingerprintBiometric.upsert(input));
});
