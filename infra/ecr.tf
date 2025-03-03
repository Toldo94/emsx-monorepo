resource "aws_ecr_repository" "emsx_monorepo" {
  name                 = "emsx-monorepo"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}