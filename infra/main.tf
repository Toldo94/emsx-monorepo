terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  backend "s3" {
    bucket = "emsx-tfstate"
    key = "state/terraform.tfstate"
    region = "us-west-2"
    encrypt = true
    use_lockfile = true
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}