import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
			<section id="four" className="wrapper">
				<div className="inner">

					<header className="major">
						<h2>SamGab Tecnologia - Política de privacidade</h2>
					</header>

					<section>
						<h4>Contexto</h4>
						<p>Esta página é usada para informar os visitantes sobre minhas políticas com as informações disponibilizadas ou coletadas no app se alguém decidiu usar meu serviço. Se você optar por usar meu serviço, então concorda com a coleta e uso de informações em relação a esta política. As informações coletadas são usadas para fornecer e melhorar o serviço. Eu não vou usar ou compartilhar suas informações com ninguém, exceto conforme descrito nesta Política de privacidade. Os apps são disponibilizados para fins de utilização e produtividade no dia a dia. Não existem ADs nos nossos apps.</p>
						<h4>Aplicativos de terceiros</h4>
						<p>Link para a política de privacidade da engine <a href="https://github.com/zxing/zxing/wiki/Frequently-Asked-Questions">ZXing</a>, utilizada pelo Allcode, e também o link para a política de privacidade do <a href="https://policies.google.com/privacy">Google Play Services</a>, mecanismo também utilizado.</p>
						<h4>Ajustes para simplificar os apps</h4>
						<p>Para simplificar a utilização do Allcode, as permissões originais de acesso aos contatos foram removidas, ou seja, o app utiliza somente a permissão da câmera, armazenamento e utilização de rede (internet) para o correto funcionamento. Nenhuma permissão complementar é utilizada para os outros apps disponíveis em nosso catálogo.</p>
						<h4>Segurança</h4>
						<p>Os apps desenvolvidos capturam apenas as informações essenciais para você os utilizar da melhor maneira. </p>
						<h4>Links para outros sites</h4>
						<p>Este serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por mim. Portanto, aconselho fortemente você a revisar a política de privacidade desses sites. Não tenho controle e não assumo nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.</p>
						<h4>Mudanças nesta política de privacidade</h4>
						<p>Eu posso atualizar nossa política de privacidade em algum momento. Assim, você é aconselhado a revisar esta página periodicamente para quaisquer alterações. Eu irei notificá-lo de quaisquer alterações postando a nova Política de Privacidade nesta página. Essas alterações entram em vigor imediatamente depois de serem postadas nesta página.</p>
						<h4>Contato</h4>
						<p>Se você tiver alguma dúvida ou sugestão sobre minha política de privacidade, não hesite em entrar em contato através dos botões abaixo.</p>
					</section>

				</div>
			</section>
 
    <Footer />
  </Layout>
);

export default IndexPage;
