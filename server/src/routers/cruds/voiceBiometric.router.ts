import { Router, json } from "express";
import { VoiceBiometric } from "@models/voiceBiometric.model";

export const voiceBiometricRouter = Router();

voiceBiometricRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
voiceBiometricRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.aggregate(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.findFirst(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.findMany(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    VoiceBiometric.findMany(req, input),
    VoiceBiometric.count(req, { where: input?.where }),
    VoiceBiometric.count(req),
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
voiceBiometricRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.findUnique(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await VoiceBiometric.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
voiceBiometricRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.groupBy(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await VoiceBiometric.count(req, input, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/createMany", async (req, res) => {
  res.json(await VoiceBiometric.createMany(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/createOne", async (req, res) => {
  res.json(await VoiceBiometric.createOne(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/deleteMany", async (req, res) => {
  res.json(await VoiceBiometric.deleteMany(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/deleteOne", async (req, res) => {
  res.json(await VoiceBiometric.deleteOne(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/updateMany", async (req, res) => {
  res.json(await VoiceBiometric.updateMany(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/updateOne", async (req, res) => {
  res.json(await VoiceBiometric.updateOne(req, req.body, { bypassMiddleware: true }));
});
voiceBiometricRouter.post("/upsert", async (req, res) => {
  res.json(await VoiceBiometric.upsert(req, req.body, { bypassMiddleware: true }));
});
