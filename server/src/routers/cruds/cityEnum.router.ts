import { Router, json } from "express";
import { CityEnum } from "@models/cityEnum.model";

export const cityEnumRouter = Router();

cityEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
cityEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.aggregate(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.findFirst(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.findMany(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    CityEnum.findMany(req, input),
    CityEnum.count(req, { where: input?.where }),
    CityEnum.count(req),
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
cityEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.findUnique(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await CityEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
cityEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.groupBy(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CityEnum.count(req, input, { bypassMiddleware: true }));
});
cityEnumRouter.post("/createMany", async (req, res) => {
  res.json(await CityEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/createOne", async (req, res) => {
  res.json(await CityEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await CityEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await CityEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await CityEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await CityEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
cityEnumRouter.post("/upsert", async (req, res) => {
  res.json(await CityEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
