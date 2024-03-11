import { Router, json } from "express";
import { GenderEnum } from "@models/genderEnum.model";

export const genderEnumRouter = Router();

genderEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
genderEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.aggregate(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.findFirst(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.findMany(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    GenderEnum.findMany(req, input),
    GenderEnum.count(req, { where: input?.where }),
    GenderEnum.count(req),
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
genderEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.findUnique(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await GenderEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
genderEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.groupBy(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await GenderEnum.count(req, input, { bypassMiddleware: true }));
});
genderEnumRouter.post("/createMany", async (req, res) => {
  res.json(await GenderEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/createOne", async (req, res) => {
  res.json(await GenderEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await GenderEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await GenderEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await GenderEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await GenderEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
genderEnumRouter.post("/upsert", async (req, res) => {
  res.json(await GenderEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
