import { Router, json } from "express";
import { DeviceTypeEnum } from "@models/deviceTypeEnum.model";

export const deviceTypeEnumRouter = Router();

deviceTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
deviceTypeEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.aggregate(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.findFirst(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.findMany(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    DeviceTypeEnum.findMany(req, input),
    DeviceTypeEnum.count(req, { where: input?.where }),
    DeviceTypeEnum.count(req),
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
deviceTypeEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.findUnique(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await DeviceTypeEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
deviceTypeEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.groupBy(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await DeviceTypeEnum.count(req, input, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/createMany", async (req, res) => {
  res.json(await DeviceTypeEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/createOne", async (req, res) => {
  res.json(await DeviceTypeEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await DeviceTypeEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await DeviceTypeEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await DeviceTypeEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await DeviceTypeEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
deviceTypeEnumRouter.post("/upsert", async (req, res) => {
  res.json(await DeviceTypeEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
