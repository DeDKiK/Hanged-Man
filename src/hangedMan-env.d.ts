declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.json" {
  const value: any;
  export default value;
}
