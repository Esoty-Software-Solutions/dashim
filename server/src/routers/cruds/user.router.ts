import { Router, json } from "express";
import { User } from "@models/user.model";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
userRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await User.aggregate(req, input, { bypassMiddleware: true }));
});
userRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await User.findFirst(req, input, { bypassMiddleware: true }));
});
userRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await User.findMany(req, input, { bypassMiddleware: true }));
});
userRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    User.findMany(req, input),
    User.count(req, { where: input?.where }),
    User.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await User.findUnique(req, input, { bypassMiddleware: true }));
});
userRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await User.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
userRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await User.groupBy(req, input, { bypassMiddleware: true }));
});
userRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await User.count(req, input, { bypassMiddleware: true }));
});
userRouter.post("/createMany", async (req, res) => {
  res.json(await User.createMany(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/createOne", async (req, res) => {
  res.json(await User.createOne(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/deleteMany", async (req, res) => {
  res.json(await User.deleteMany(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/deleteOne", async (req, res) => {
  res.json(await User.deleteOne(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/updateMany", async (req, res) => {
  res.json(await User.updateMany(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/updateOne", async (req, res) => {
  res.json(await User.updateOne(req, req.body, { bypassMiddleware: true }));
});
userRouter.post("/upsert", async (req, res) => {
  res.json(await User.upsert(req, req.body, { bypassMiddleware: true }));
});
