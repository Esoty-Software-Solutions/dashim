import { Router, json } from "express";
import { DeviceToken } from "@models/deviceToken.model";

export const deviceTokenRouter = Router();

deviceTokenRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
deviceTokenRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.aggregate(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.findFirst(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.findMany(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    DeviceToken.findMany(req, input),
    DeviceToken.count(req, { where: input?.where }),
    DeviceToken.count(req),
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
deviceTokenRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.findUnique(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await DeviceToken.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
deviceTokenRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.groupBy(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceToken.count(req, input, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/createMany", async (req, res) => {
  res.json(await DeviceToken.createMany(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/createOne", async (req, res) => {
  res.json(await DeviceToken.createOne(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/deleteMany", async (req, res) => {
  res.json(await DeviceToken.deleteMany(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/deleteOne", async (req, res) => {
  res.json(await DeviceToken.deleteOne(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/updateMany", async (req, res) => {
  res.json(await DeviceToken.updateMany(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/updateOne", async (req, res) => {
  res.json(await DeviceToken.updateOne(req, req.body, { bypassMiddleware: true }));
});
deviceTokenRouter.post("/upsert", async (req, res) => {
  res.json(await DeviceToken.upsert(req, req.body, { bypassMiddleware: true }));
});
