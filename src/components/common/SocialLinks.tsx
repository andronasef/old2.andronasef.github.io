import Icon from "./Icon";

function SocialLinks() {
  return (
    <div className="flex gap-3 items-center [&>*]:w-6 md:[&>*]:w-8 [&>*]:bg-none">
      <a target="_blank" href="https://twitter.com/andronasef">
        <Icon src="/assets/twitter.svg" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/andronasef">
        <Icon src="/assets/linkedin.svg" />
      </a>
      <a target="_blank" href="mailto:andronasef@gmail.com">
        <Icon src="/assets/mail.svg" />
      </a>
    </div>
  );
}
export default SocialLinks;
