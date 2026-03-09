import { Router } from "express"
import axios from "axios"

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { code } = req.body

    const response = await axios.post(
      "http://localhost:5000/analyze",
      { code }
    )

    res.json(response.data)

  } catch (error) {
    res.status(500).json({
      result: "Error analyzing code"
    })
  }
})

export default router