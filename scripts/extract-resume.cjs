const fs = require('node:fs')
const path = require('node:path')
const pdf = require('pdf-parse')

async function main() {
  const inputPath = path.resolve(process.cwd(), 'ChristianDutton_Resume.pdf')
  const outputPath = path.resolve(process.cwd(), 'resume-extracted.txt')

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Resume not found at ${inputPath}`)
  }

  const fileBuffer = fs.readFileSync(inputPath)
  const data = await pdf(fileBuffer)

  fs.writeFileSync(outputPath, data.text ?? '', 'utf8')
  console.log(`Extracted resume text to ${outputPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
