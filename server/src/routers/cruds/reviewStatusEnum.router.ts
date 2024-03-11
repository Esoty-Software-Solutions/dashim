import { Router, json } from "express";
import { ReviewStatusEnum } from "@models/reviewStatusEnum.model";

export const reviewStatusEnumRouter = Router();

reviewStatusEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
reviewStatusEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.aggregate(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.findFirst(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.findMany(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    ReviewStatusEnum.findMany(req, input),
    ReviewStatusEnum.count(req, { where: input?.where }),
    ReviewStatusEnum.count(req),
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
reviewStatusEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.findUnique(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await ReviewStatusEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
reviewStatusEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.groupBy(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await ReviewStatusEnum.count(req, input, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/createMany", async (req, res) => {
  res.json(await ReviewStatusEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/createOne", async (req, res) => {
  res.json(await ReviewStatusEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await ReviewStatusEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await ReviewStatusEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await ReviewStatusEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await ReviewStatusEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
reviewStatusEnumRouter.post("/upsert", async (req, res) => {
  res.json(await ReviewStatusEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
