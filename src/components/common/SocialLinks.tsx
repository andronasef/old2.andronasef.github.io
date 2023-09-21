import A from "./A";
import Icon from "./Icon";

function SocialLinks() {
  return (
    <div className="flex gap-3 items-center [&>*]:w-6 md:[&>*]:w-8 [&>*]:bg-none">
      <A href="https://twitter.com/andronasef">
        <Icon src="/assets/twitter.svg" />
      </A>
      <A href="https://www.linkedin.com/in/andronasef">
        <Icon src="/assets/linkedin.svg" />
      </A>
      <A href="mailto:andronasef@gmail.com">
        <Icon src="/assets/mail.svg" />
      </A>
    </div>
  );
}
export default SocialLinks;
